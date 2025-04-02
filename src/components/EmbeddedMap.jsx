import "../CSS/EmbeddedMap.css";

const EmbeddedMap = () => {
  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <iframe
        title="Google Map for Buttonwood, Rosemead, CA"
        width=" 80%"
        height="500"
        style={{
          border: 0,
          marginLeft: 170,
          marginTop: 70,
        }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1641.6455313453032!2d-120.11887837137222!3d34.62208424663625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e95541884c0375%3A0xa720f5f60c641614!2sButtonwood%20Farm%20%26%20Vineyard!5e0!3m2!1sen!2sng!4v1731533248120!5m2!1sen!2sng"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
