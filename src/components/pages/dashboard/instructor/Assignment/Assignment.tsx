import React from "react";
import InstructorCss from "../../../../../styles/Instructor.module.css";
import fileIcon from "../../../../../assets/filel.png";
import rightIcon from "../../../../../assets/RightIcon.png";
import Image from "next/image";

const Assignment = () => {
  return (
    <>
      <div className="assignment_grade">
        <div className="ascontainer" style={{ padding: "0px 2rem" }}>
          <div className="assignment_grade_heading flex justify-between md:flex-row xsm:flex-col xsm:gap-3 md:gap-0">
            <div className="assignment_grade_heading_left">
              <h2
                className="md:mb-3 xsm:md-1"
                style={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: " 130%",
                  letterSpacing: " 0.02em",
                  color: " #232D42",
                }}
              >
                Cyber Security
              </h2>
              <div className="assignment_grade_heading_bottom_content flex gap-5">
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "130%",
                    letterSpacing: " 0.02em",
                    color: " #3A57E8",
                  }}
                >
                  Due Mar 27 by 11: 59 pm
                </span>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "130%",
                    letterSpacing: " 0.02em",
                    color: " #3A57E8",
                  }}
                >
                  Pointss 100
                </span>
              </div>
            </div>
            <div className={InstructorCss.assignment_grade_heading_right}>
              <button
                className="gap-3 flex justify-center items-center rounded"
                style={{
                  width: "165px",
                  height: "42px",
                  fontWeight: "400",
                  fontSize: "15px",
                  color: "#1AA053",
                  background: " #D5EBDF",
                }}
              >
                <Image src={rightIcon} alt="" />
                Submitted!
              </button>
            </div>
          </div>

          <div className="mt-[1.5rem] bg-[#fff] pl-[25px] xsm:pr-[25px] md:pr-[86px] pt-[28px] pb-[28px]">
            <div
              className="flex-col  md:flex-row assignment_grade_body_topheading flex  md:justify-between md:items-center"
              style={{
                borderBottom: "1px  solid #ADB5BD",
                paddingBottom: " 17px",
              }}
            >
              <h2
                className="xsm:mb-3 md:mb-0"
                style={{
                  fontWeight: "600",
                  fontSize: " 17px",
                  lineHeight: "130%",
                  letterSpacing: "0.02em",
                  color: " #232D42",
                }}
              >
                Name of Single Student Jessica Doe
              </h2>
              <button
                className="rounded xsm:!w-full md:!w-[119px]"
                style={{
                  width: "119px",
                  height: " 36px",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "175%",
                  letterSpacing: " 0.02em",
                  color: "#FFFFFF",
                  background: " #3A57E8",
                }}
              >
                Update Grade
              </button>
            </div>

            <div className="">
              <h1
                className="font-semibold mb-4 mt-4"
                style={{
                  fontSize: "20px",
                  lineHeight: "130%",
                  letterSpacing: "0.02em",
                  color: "#232D42",
                }}
              >
                Abraham Lincoin Eassy
              </h1>
              <div className="assignment_grade_inputfiled flex xsm:gap-3 md:gap-24 xsm:flex-col md:flex-row">
                <div className="flex flex-col">
                  <label
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      marginBottom: "5px",
                      lineHeight: "175%",
                      letterSpacing: "0.02em",
                      color: "#232D42",
                    }}
                  >
                    Grade:
                  </label>
                  <input
                    type="text"
                    className="md:w-[368px] xsm:w-full"
                    style={{
                      height: " 42px",
                      background: "#FFFFFF",
                      boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)",
                      marginBottom: "1.2rem",
                      padding: "5px 13px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      marginBottom: "5px",
                      lineHeight: "175%",
                      letterSpacing: "0.02em",
                      color: "#232D42",
                    }}
                  >
                    Submitted Multiple times, choose which to view:
                  </label>
                  <input
                    type="date"
                    className="md:w-[480px] xsm:w-full"
                    style={{
                      height: "42px",
                      background: "#FFFFFF",
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      marginBottom: " 1.2rem",
                      padding: "5px 13px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>

              <button
                className="flex text-xs rounded md:!w-[16rem] xsm:!w-full font-medium justify-center items-center gap-3"
                style={{
                  background: "#EBEEFD",
                  border: "1px solid #3A57E8",
                  padding: "5px 20px",
                  marginBottom: "1.6rem",
                  lineHeight: "175%",
                  letterSpacing: "0.02em",
                  color: "#3A57E8",
                }}
              >
                More Details in the sppedd grader
              </button>

              <div
                className={`${InstructorCss.submitted_filesss} flex xsm:items-left md:items-center xsm:gap-2 md:gap-8 md:flex-row xsm:flex-col `}
                style={{
                  borderBottom: "1px solid #ADB5BD",
                  paddingBottom: "2.1rem",
                }}
              >
                <h3
                  className="font-medium text-sm"
                  style={{
                    lineHeight: " 175%",
                    letterSpacing: "0.02em",
                    color: "#232D42",
                  }}
                >
                  Submitted files:
                </h3>
                <button
                  className="flex text-xs rounded  font-medium justify-center items-center gap-3"
                  style={{
                    marginBottom: 0,
                    background: "#EBEEFD",
                    border: "1px solid #3A57E8",
                    padding: "5px 20px",
                    lineHeight: "175%",
                    letterSpacing: "0.02em",
                    color: "#3A57E8",
                  }}
                >
                  <Image src={fileIcon} width={"18px"} height={"19px"} alt="" />
                  History Survey
                </button>
              </div>
              <div
                className={`${InstructorCss.assingment_comment_input} flex flex-col`}
              >
                <label
                  className="font-semibold"
                  style={{
                    fontStyle: "normal",
                    paddingBottom: "1rem",
                    fontSize: "15px",
                    paddingTop: "9px",
                    lineHeight: "175%",
                    letterSpacing: " 0.02em",
                    color: " #232D42",
                  }}
                >
                  Add a Comment
                </label>
                <input type="text" className="md:!w-[368px] xsm:!w-full" />
                <button className="md:w-[131px] xsm:w-full">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
