import React from "react";

function HeaderMarquee() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#4747bc",
          padding: "10px",
          borderRadius: "10px",
          // height:"50px"
        }}
      >
        <marquee style={{ color: "#eee2e6", fontWeight: "bold" }}>
          {" "}
          <span>Frequent App User - 20</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; <span>High Potential Lead - 30</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; <span>Prime Segment Lead - 30</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;<span>Hot Trigger (4 Days) - 10</span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; <span>Warm Trigger (8 Days) - 10</span>
        </marquee>
        {/* <marquee style={{ color: "#cc2756" }}> </marquee> */}
      </div>
    </>
  );
}

export default HeaderMarquee;
