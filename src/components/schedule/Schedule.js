// src/components/Schedule/Schedule.js

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Schedule.css";

const SERVICE_OPTIONS = [
  "Tree Removal",
  "Tree Trimming",
  "Stump Grinding",
  "Emergency Service",
  "Other",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  address: "",
  service: "",
  date: "",
  description: "",
};

const Schedule = () => {
  const [form, setForm] = useState(INITIAL_FORM);

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fileInputRef = useRef();

  /* ========================================
     FORM HANDLERS
  ======================================== */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 5) {
      setErrorMsg("You can upload a maximum of 5 photos.");
      return;
    }

    setErrorMsg("");

    setImages((prev) => [...prev, ...files]);

    const newPreviews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setPreviews((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  /* ========================================
     CLOUDINARY UPLOAD
  ======================================== */

  const uploadToCloudinary = async (file) => {
    const data = new FormData();

    data.append("file", file);

    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const json = await res.json();

    console.log("Cloudinary response:", json);

    if (!res.ok || !json.secure_url) {
      throw new Error(
        json.error?.message || "Cloudinary upload failed"
      );
    }

    return json.secure_url;
  };

  /* ========================================
     SUBMIT
  ======================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("uploading");
    setErrorMsg("");

    try {
      let imageUrls = [];

      if (images.length > 0) {
        imageUrls = await Promise.all(
          images.map(uploadToCloudinary)
        );
      }

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          service: form.service || "Not specified",
          description: form.description || "None",

          images:
            imageUrls.length > 0
              ? imageUrls.join("\n")
              : "No photos uploaded",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setForm(INITIAL_FORM);

      setImages([]);
      setPreviews([]);
    } catch (err) {
      console.error(err);

      setStatus("error");

      setErrorMsg(
        err.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  /* ========================================
     SUCCESS STATE
  ======================================== */

  if (status === "success") {
    return (
      <section className="schedule-section" id="estimate">
        <div className="schedule-inner">
          <div className="schedule-success">
            <div className="success-icon">✓</div>

            <h2>Request Sent!</h2>

            <p>
              We'll be in touch within 24 hours
              to confirm your free estimate.
            </p>

            <button
              className="success-reset"
              onClick={() => setStatus("idle")}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ========================================
     FORM
  ======================================== */

  return (
    <section className="schedule-section" id="estimate">
      <div className="schedule-inner">

        <div className="schedule-header">
          <p className="schedule-eyebrow">
            Free Estimate
          </p>

          <h2 className="schedule-title">
            Schedule Your Service
          </h2>

          <p className="schedule-subtitle">
            Fill out the form below and we'll get
            back to you within 24 hours.
          </p>
        </div>

        <form
          className="schedule-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* ROW 1 */}

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(803) 555-0100"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* ROW 2 */}

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Property Address
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="123 Main St"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* SERVICE */}

          <div className="form-group full-width">

            <label htmlFor="service">
              Service Needed
            </label>

            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">
                Select a service...
              </option>

              {SERVICE_OPTIONS.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>

          </div>

          {/* DESCRIPTION */}

          <div className="form-group full-width">

            <label htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Describe the trees, concerns, access to property, etc."
              value={form.description}
              onChange={handleChange}
            />

          </div>

          {/* PHOTO UPLOAD */}

          <div className="form-group full-width">

            <label>
              Photos
            </label>

            <div
              className="upload-zone"
              onClick={() =>
                fileInputRef.current.click()
              }
              onDragOver={(e) =>
                e.preventDefault()
              }
              onDrop={(e) => {
                e.preventDefault();

                handleFiles({
                  target: {
                    files: e.dataTransfer.files,
                  },
                });
              }}
            >
              <div className="upload-icon">
                📷
              </div>

              <p className="upload-text">
                Click or drag photos here
              </p>

              <p className="upload-hint">
                JPG, PNG, HEIC up to 10MB
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFiles}
                style={{ display: "none" }}
              />
            </div>

            {previews.length > 0 && (
              <div className="preview-grid">

                {previews.map((src, index) => (
                  <div
                    key={index}
                    className="preview-item"
                  >
                    <img
                      src={src}
                      alt={`Upload ${index + 1}`}
                    />

                    <button
                      type="button"
                      className="preview-remove"
                      onClick={() =>
                        removeImage(index)
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* ERROR */}

          {errorMsg && (
            <p className="form-error">
              {errorMsg}
            </p>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            className="schedule-submit"
            disabled={status === "uploading"}
          >
            {status === "uploading"
              ? "Sending..."
              : "Request Free Estimate"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Schedule;