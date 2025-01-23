import React from 'react';
import { FacebookOutlined, InstagramOutlined, XOutlined, LinkedinOutlined } from '@ant-design/icons';

const ContactUs = () => {
  const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#f0f0f0",
      paddingTop: "60px",
    },
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "30px",
      maxWidth: "1000px",
      width: "100%",
      color: "#333",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      color: "#0047AB",
      marginBottom: "20px",
      fontSize: "2.5em",
      fontWeight: "bold",
    },
    section: {
      marginBottom: "20px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f0f8ff",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    subHeading: {
      color: "#0056b3",
      marginBottom: "15px",
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    text: {
      marginBottom: "10px",
      lineHeight: "1.6",
    },
    link: {
      color: "#0047AB",
      textDecoration: "none",
      fontWeight: "bold",
    },
    contactCard: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "space-between",
    },
    contactItem: {
      flex: "1 1 calc(33% - 20px)",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      textAlign: "center",
    },
    contactIcon: {
      marginRight: "10px",
      fontSize: "1.5em",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      marginTop: "30px",
      borderTop: "1px solid #ddd",
      color: "#777",
    },
    footerSocial: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {/* Page Header */}
        <h1 style={styles.header}>Contact Us</h1>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to the SLT Trainee System support page. Reach out for any
          inquiries, assistance, or feedback. We’re here to help!
        </p>


        {/* Feedback Section */}
        <div style={styles.section}>
          <h2 style={styles.subHeading}>We Value Your Feedback</h2>
          <p style={styles.text}>
            Share your thoughts and suggestions to help us improve the SLT
            Trainee System. Your feedback is invaluable in making this system
            more efficient and user-friendly.
          </p>
          <p style={styles.text}>
            Email your feedback to{" "}
            <a href="mailto:feedback@slt.lk" style={styles.link}>
              feedback@slt.lk
            </a>.
          </p>
        </div>

        {/* Emergency Protocols */}
        <div style={styles.section}>
          <h2 style={styles.subHeading}>Emergency Protocols</h2>
          <p style={styles.text}>
            In case of emergencies during your training, please follow these steps:
          </p>
          <ol style={{ marginLeft: "20px" }}>
            <li>Contact your immediate supervisor using the emergency contact provided below.</li>
            <li>Report to the nearest SLT office or inform the management via the hotline.</li>
            <li>
              For medical emergencies, inform the SLT administration at{" "}
              <a href="mailto:emergency@slt.lk" style={styles.link}>emergency@slt.lk</a>.
            </li>
          </ol>
        </div>

        {/* Contact Information Cards */}
        <div style={styles.section}>
          <div style={styles.contactCard}>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📞</div>
              <p>
                <strong>Hotline:</strong>
              </p>
              <p>+94 11 2021 555</p>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📧</div>
              <p>
                <strong>Email:</strong>
              </p>
              <p>
                <a href="mailto:traineesupport@slt.lk" style={styles.link}>
                  traineesupport@slt.lk
                </a>
              </p>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📍</div>
              <p>
                <strong>Address:</strong>
              </p>
              <p>SLT Headquarters, Lotus Road, Colombo 01, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          &copy; {new Date().getFullYear()} Sri Lanka Telecom. All rights reserved.
          <div style={styles.footerSocial}>
            <a href="#">
              <FacebookOutlined />
            </a>
            <a href="#">
              <InstagramOutlined />
            </a>
            <a href="#">
              <XOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
