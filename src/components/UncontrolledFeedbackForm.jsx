import React, { useRef, useState } from 'react';

function UncontrolledFeedbackForm() {
  // Creating references to DOM elements directly
  const nameRef = useRef(null);
  const commentsRef = useRef(null);

  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('General');
  const [submitted, setSubmitted] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    // Fetching values directly from DOM references
    const enteredName = nameRef.current.value.trim();
    const enteredComments =
      commentsRef.current.value.trim();

    if (enteredName === '') {
      alert('Please enter your name.');
      return;
    }

    if (enteredComments === '') {
      alert('Please write your feedback.');
      return;
    }

    if (rating === 0) {
      alert('Please select a rating.');
      return;
    }

    alert(
      'Feedback Submitted Successfully!\\n\\n' +
      'User: ' +
      enteredName +
      '\\nCategory: ' +
      category +
      '\\nRating: ' +
      rating +
      '/5\\nComments: ' +
      enteredComments
    );

    // Clear inputs manually
    nameRef.current.value = '';
    commentsRef.current.value = '';

    setRating(0);
    setCategory('General');
    setSubmitted(true);
  }

  function handleReset() {
    nameRef.current.value = '';
    commentsRef.current.value = '';

    setRating(0);
    setCategory('General');
    setSubmitted(false);
  }

  return (
    <div className="feedback-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          background: #fff7ed;
        }

        /* MAIN PAGE */

        .feedback-page {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 35px 20px;

          background:
            radial-gradient(
              circle at top left,
              rgba(249, 115, 22, 0.20),
              transparent 35%
            ),

            radial-gradient(
              circle at bottom right,
              rgba(234, 88, 12, 0.18),
              transparent 35%
            ),

            linear-gradient(
              135deg,
              #fff7ed,
              #ffffff,
              #ffedd5
            );
        }

        /* CARD */

        .feedback-card {
          width: 100%;
          max-width: 600px;

          background:
            rgba(255, 255, 255, 0.95);

          border:
            1px solid
            rgba(255, 255, 255, 0.8);

          border-radius: 25px;

          overflow: hidden;

          box-shadow:
            0 25px 60px
            rgba(154, 52, 18, 0.15),

            0 10px 25px
            rgba(0, 0, 0, 0.08);

          animation:
            cardEnter 0.6s ease;
        }

        @keyframes cardEnter {

          from {
            opacity: 0;

            transform:
              translateY(30px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }

        /* HEADER */

        .feedback-header {
          padding: 28px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #ea580c,
              #f97316,
              #fb923c
            );

          position: relative;

          overflow: hidden;
        }

        .feedback-header::after {
          content: "";

          position: absolute;

          width: 150px;
          height: 150px;

          right: -50px;
          top: -70px;

          background:
            rgba(255,255,255,0.12);

          border-radius: 50%;
        }

        .header-content {
          display: flex;

          align-items: center;

          gap: 15px;

          position: relative;

          z-index: 2;
        }

        .feedback-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          background:
            rgba(255,255,255,0.18);

          border:
            1px solid
            rgba(255,255,255,0.3);

          border-radius: 17px;

          font-size: 28px;

          animation:
            iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-5px);
          }

        }

        .header-title {
          margin: 0;

          font-size: 25px;

          font-weight: 900;
        }

        .header-subtitle {
          margin: 5px 0 0;

          color:
            rgba(255,255,255,0.8);

          font-size: 11px;
        }

        /* CONTENT */

        .feedback-content {
          padding: 28px;
        }

        .section-title {
          margin: 0;

          color: #431407;

          font-size: 18px;

          font-weight: 900;
        }

        .section-text {
          margin:
            5px 0 22px;

          color: #9a3412;

          font-size: 10px;
        }

        /* FORM */

        .form-group {
          margin-bottom: 18px;
        }

        .form-label {
          display: block;

          margin-bottom: 7px;

          color: #374151;

          font-size: 11px;

          font-weight: 800;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;

          padding: 12px 13px;

          color: #1f2937;

          background: #fffaf5;

          border:
            1px solid
            #fed7aa;

          border-radius: 11px;

          outline: none;

          font-size: 11px;

          transition:
            all 0.25s ease;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          background: white;

          border-color:
            #f97316;

          box-shadow:
            0 0 0 4px
            rgba(249,115,22,0.10);
        }

        .form-textarea {
          min-height: 120px;

          resize: vertical;
        }

        /* RATING */

        .rating-box {
          padding: 16px;

          background:
            linear-gradient(
              135deg,
              #fff7ed,
              #fffbeb
            );

          border:
            1px solid
            #fed7aa;

          border-radius: 13px;

          text-align: center;
        }

        .rating-title {
          margin:
            0 0 9px;

          color: #7c2d12;

          font-size: 10px;

          font-weight: 800;
        }

        .stars {
          display: flex;

          justify-content: center;

          gap: 5px;
        }

        .star {
          padding: 2px;

          color: #cbd5e1;

          background: transparent;

          border: none;

          cursor: pointer;

          font-size: 28px;

          transition:
            all 0.2s ease;
        }

        .star:hover {
          transform:
            scale(1.2);
        }

        .star.active {
          color: #f59e0b;

          filter:
            drop-shadow(
              0 3px 5px
              rgba(245,158,11,0.3)
            );
        }

        .rating-text {
          margin-top: 5px;

          color: #ea580c;

          font-size: 9px;

          font-weight: 800;
        }

        /* INFO */

        .info-box {
          display: flex;

          align-items: center;

          gap: 8px;

          padding: 12px;

          margin-bottom: 18px;

          color: #166534;

          background: #f0fdf4;

          border:
            1px solid
            #bbf7d0;

          border-radius: 10px;

          font-size: 9px;

          font-weight: 700;
        }

        .info-icon {
          width: 22px;
          height: 22px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: white;

          background: #22c55e;

          border-radius: 50%;
        }

        /* BUTTONS */

        .button-row {
          display: flex;

          gap: 10px;
        }

        .submit-button {
          flex: 1;

          padding: 13px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #ea580c,
              #f97316
            );

          border: none;

          border-radius: 11px;

          cursor: pointer;

          font-size: 11px;

          font-weight: 900;

          box-shadow:
            0 8px 20px
            rgba(234,88,12,0.25);

          transition:
            all 0.25s ease;
        }

        .submit-button:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 12px 25px
            rgba(234,88,12,0.30);
        }

        .reset-button {
          padding:
            13px 18px;

          color: #64748b;

          background: #f8fafc;

          border:
            1px solid
            #cbd5e1;

          border-radius: 11px;

          cursor: pointer;

          font-size: 10px;

          font-weight: 800;

          transition:
            all 0.25s ease;
        }

        .reset-button:hover {
          background: #f1f5f9;

          transform:
            translateY(-2px);
        }

        /* SUCCESS */

        .success-box {
          margin-top: 20px;

          padding: 15px;

          color: #166534;

          background:
            #f0fdf4;

          border:
            1px solid
            #bbf7d0;

          border-radius: 12px;

          text-align: center;

          animation:
            successEnter 0.4s ease;
        }

        @keyframes successEnter {

          from {
            opacity: 0;

            transform:
              scale(0.95);
          }

          to {
            opacity: 1;

            transform:
              scale(1);
          }

        }

        .success-icon {
          font-size: 25px;
        }

        .success-title {
          margin: 5px 0;

          font-size: 15px;

          font-weight: 900;
        }

        .success-text {
          margin: 0;

          font-size: 9px;
        }

        /* FOOTER */

        .footer {
          margin-top: 20px;

          color: #94a3b8;

          font-size: 9px;

          text-align: center;
        }

        /* MOBILE */

        @media (max-width: 480px) {

          .feedback-page {
            padding: 15px 10px;
          }

          .feedback-header {
            padding: 22px 18px;
          }

          .feedback-content {
            padding: 22px 18px;
          }

          .header-title {
            font-size: 20px;
          }

          .feedback-icon {
            width: 48px;
            height: 48px;

            font-size: 23px;
          }

          .button-row {
            flex-direction: column;
          }

          .reset-button {
            width: 100%;
          }

        }

      `}</style>


      <div className="feedback-card">

        {/* HEADER */}

        <div className="feedback-header">

          <div className="header-content">

            <div className="feedback-icon">
              💬
            </div>

            <div>

              <h2 className="header-title">
                Customer Feedback
              </h2>

              <p className="header-subtitle">
                We value your opinion and experience
              </p>

            </div>

          </div>

        </div>


        {/* CONTENT */}

        <div className="feedback-content">

          <h3 className="section-title">
            Share Your Experience
          </h3>

          <p className="section-text">
            Tell us what you think about our service.
          </p>


          <div className="info-box">

            <span className="info-icon">
              ✓
            </span>

            Your feedback helps us improve our
            services.

          </div>


          <form onSubmit={handleFormSubmit}>

            {/* NAME */}

            <div className="form-group">

              <label className="form-label">
                Your Name
              </label>

              <input
                type="text"
                ref={nameRef}
                className="form-input"
                placeholder="Enter your name"
              />

            </div>


            {/* CATEGORY */}

            <div className="form-group">

              <label className="form-label">
                Feedback Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="form-select"
              >

                <option value="General">
                  General Feedback
                </option>

                <option value="Service">
                  Customer Service
                </option>

                <option value="Website">
                  Website Experience
                </option>

                <option value="Product">
                  Product Quality
                </option>

                <option value="Suggestion">
                  Suggestion
                </option>

              </select>

            </div>


            {/* RATING */}

            <div className="form-group">

              <label className="form-label">
                Rate Your Experience
              </label>

              <div className="rating-box">

                <p className="rating-title">
                  How was your experience?
                </p>

                <div className="stars">

                  {[1, 2, 3, 4, 5].map(
                    function (star) {
                      return (
                        <button
                          type="button"
                          key={star}
                          className={
                            star <= rating
                              ? 'star active'
                              : 'star'
                          }
                          onClick={() =>
                            setRating(star)
                          }
                        >
                          ★
                        </button>
                      );
                    }
                  )}

                </div>

                <div className="rating-text">

                  {rating === 0 &&
                    'Select your rating'}

                  {rating === 1 &&
                    'Very Poor'}

                  {rating === 2 &&
                    'Needs Improvement'}

                  {rating === 3 &&
                    'Average'}

                  {rating === 4 &&
                    'Good Experience'}

                  {rating === 5 &&
                    'Excellent!'}

                </div>

              </div>

            </div>


            {/* COMMENTS */}

            <div className="form-group">

              <label className="form-label">
                Comments
              </label>

              <textarea
                ref={commentsRef}
                rows="4"
                className="form-textarea"
                placeholder="Write your feedback..."
              ></textarea>

            </div>


            {/* BUTTONS */}

            <div className="button-row">

              <button
                type="submit"
                className="submit-button"
              >
                🚀 Submit Feedback
              </button>

              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Clear
              </button>

            </div>

          </form>


          {/* SUCCESS MESSAGE */}

          {submitted && (

            <div className="success-box">

              <div className="success-icon">
                🎉
              </div>

              <div className="success-title">
                Feedback Submitted!
              </div>

              <p className="success-text">
                Thank you for sharing your valuable
                feedback with us.
              </p>

            </div>

          )}


          <p className="footer">
            ❤️ Thank you for helping us improve.
          </p>

        </div>

      </div>

    </div>
  );
}

export default UncontrolledFeedbackForm;
