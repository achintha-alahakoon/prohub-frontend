import React from 'react';
import { FacebookOutlined, InstagramOutlined, XOutlined, LinkedinOutlined } from '@ant-design/icons';
import Footer from "../../Components/Footer"; // Adjust the import path as necessary

const ContactUs = () => {
  const styles = {
    outerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#f0f0f0",
      paddingTop: "70px", // Adjust this value based on your menu bar height
      paddingBottom: "60px",
    },
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "30px",
      maxWidth: "1000px",
      width: "90%",
      color: "#333",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      margin: "0 20px",
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
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {/* Header Section */}
        <h1 style={styles.header}>Contact Us</h1>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to the SLT Trainee System support page. Reach out for any
          inquiries, assistance, or feedback. We’re here to help!
        </p>

        {/* Office Section */}
        <div style={styles.section}>
          <h2 style={styles.subHeading}>Our Office</h2>
          <p style={styles.text}>SLT Headquarters, Lotus Road, Colombo 01, Sri Lanka</p>
        </div>

        {/* Email Section */}
        <div style={styles.section}>
          <h2 style={styles.subHeading}>Email Us</h2>
          <p style={styles.text}>traineesupport@slt.lk</p>
        </div>

        {/* Call Us Section */}
        <div style={styles.section}>
          <h2 style={styles.subHeading}>Call Us</h2>
          <p style={styles.text}>+94 11 2021 555</p>
        </div>

        {/* Emergency Contacts Section */}
        <div style={styles.section}>
          <h2 style={styles.subHeading}>Emergency Contacts</h2>
          <p style={styles.text}>
            In case of emergencies or immediate support, you may contact:
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li>System Admin: +94 11 2345 678</li>
            <li>IT Helpdesk: +94 11 3456 789</li>
            <li>Supervisor Support: +94 11 4567 890</li>
          </ul>
        </div>

        {/* Contact Card Section */}
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
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactUs;
