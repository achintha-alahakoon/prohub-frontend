import React from 'react'

const ContactUs = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "30px",
      maxWidth: "1000px",
      margin: "0 auto",
      color: "#333",
    },
    header: {
      textAlign: "center",
      color: "#0047AB",
      marginBottom: "20px",
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
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    contactIcon: {
      fontSize: "40px",
      marginBottom: "10px",
      color: "#0047AB",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Welcome to the SLT Trainee System support page. Reach out for any
        inquiries, assistance, or feedback. We’re here to help!
      </p>

      {/* Quick Contacts Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Quick Contacts</h2>
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

      {/* Detailed Support Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>System Support</h2>
        <p style={styles.text}>
          For issues related to the trainee system, including login problems,
          data errors, or general queries, please contact the system
          administrator using the email provided. Make sure to include your
          trainee ID and a clear description of the issue.
        </p>
        <p style={styles.text}>
          For urgent issues, call the hotline or contact your assigned SLT
          supervisor.
        </p>
      </div>

      {/* Branch Locations Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Regional Offices</h2>
        <p style={styles.text}>
          You can visit one of our regional offices for further assistance. Use
          the SLT{" "}
          <a
            href="https://www.slt.lk/branches"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            branch locator
          </a>{" "}
          to find the nearest office to your location.
        </p>
      </div>

      {/* Feedback Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Feedback</h2>
        <p style={styles.text}>
          We value your feedback to improve the SLT Trainee System. Please share
          your suggestions by emailing{" "}
          <a href="mailto:traineesupport@slt.lk" style={styles.link}>
            traineesupport@slt.lk
          </a>{" "}
          with the subject line: "Feedback - Trainee System".
        </p>
      </div>

      {/* Emergency Contacts */}
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
    </div>
  );
};

export default ContactUs;
