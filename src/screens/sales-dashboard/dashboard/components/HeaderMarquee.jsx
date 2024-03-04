import React from "react";

function HeaderMarquee() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(255,0,0,0.08)",
          padding: "10px 3px",
          borderRadius: "10px",
        }}
      >
        <marquee style={{ color: "red", fontWeight: "600",fontSize:'17px' }}>
          
          <span>Frequent App User - 20</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; <span>High Potential Lead - 30</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; <span>Prime Segment Lead - 30</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;<span>Hot Trigger (7 Days) - 10</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; <span>Warm Trigger (15 Days) - 10</span>
        </marquee>
        {/* <marquee style={{ color: "#cc2756" }}> </marquee> */}
      </div>
    </>
  );
}

export default HeaderMarquee;
