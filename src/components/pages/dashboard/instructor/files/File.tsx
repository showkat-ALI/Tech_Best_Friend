import React from "react";
import InstructorCss from "../../../../../styles/Instructor.module.css";
import Head from "next/head";
import Image from "next/image";
import Pdf from "../../../../../assets/Pdf.png";
import DocumentLogo from "../../../../../assets/Document.png";
import MoreIcon from "../../../../../assets/MoreIcon.png";
import FileBgImage from "../../../../../assets/FileBgImage.png";
import ImageIcon from "../../../../../assets/ImageIcon.png";
import PlayIcon from "../../../../../assets/Play.png";
import VideoIcon from "../../../../../assets/Video.png";
import PlusIcon from "../../../../../assets/PlusIcon.png";
// import PlusIcon from "../../../../../assets/plusIcon.png";

const File = () => {
    return (
      <>
        <div className={InstructorCss.AllFiles}>
            <div className="flex xsm:flex-col items-baseline md:flex-row justify-between border-b-2 pb-7 ">
                <div className={`${InstructorCss.AllFileContent} md:w-[70%]`}>
                    <h3>All Files</h3>
                </div>
                <div className="flex md:justify-end md:flex-row md:w-full xsm:justify-center xsm:flex-col xsm:w-full xsm:gap-5 xsm:mt-3">
                    <button className='flex items-center rounded justify-center gap-1' style={{color:"#fff",background:"#3A57E8",padding:"8px 11px"}}>Create Folder <Image src={PlusIcon} alt=""/></button>
                    <button className='flex items-center rounded  justify-center gap-1' style={{color:"#fff",background:"#3A57E8",padding:"8px 11px"}}>Upload Files <Image src={PlusIcon} alt=""/></button>
                    <button className='flex items-center rounded  justify-center gap-1' style={{color:"#fff",background:"#3A57E8",padding:"8px 11px"}}>All Files <Image src={PlusIcon} alt=""/></button>
                </div>
            </div>
            <div className={`${InstructorCss.FileDocuments} mt-5`}>
               <h2>Documents</h2>
               <div className="lg:grid md:grid xsm:flex md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xsm:flex-col  document_row gap-6">
                   <div className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className="text-center" style={{background:"#F9F9F9",borderRadius:"5px",padding:"35px 0px"}}>
                                <Image src={Pdf} className={InstructorCss.documentCardImg} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                    <span className={InstructorCss.dff35mb}>5 mb</span>
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={DocumentLogo} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className="text-center" style={{background:"#F9F9F9",borderRadius:"5px",padding:"35px 0px"}}>
                                <Image src={Pdf} className={InstructorCss.documentCardImg} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                    <span className={InstructorCss.dff35mb}>5 mb</span>
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={DocumentLogo} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                  <div className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className="text-center" style={{background:"#F9F9F9",borderRadius:"5px",padding:"35px 0px"}}>
                                <Image src={Pdf} className={InstructorCss.documentCardImg} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                    <span className={InstructorCss.dff35mb}>5 mb</span>
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={DocumentLogo} alt=""/>
                                    <h3>Doc -134.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className="text-center" style={{background:"#F9F9F9",borderRadius:"5px",padding:"35px 0px"}}>
                                <Image src={Pdf} className={InstructorCss.documentCardImg} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                    <span className={InstructorCss.dff35mb}>5 mb</span>
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={DocumentLogo} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
  
               </div>
            </div>
  
            <div className={`${InstructorCss.FileDocuments} mt-8`}>
               <h2>Images</h2>
               <div className="lg:grid md:grid xsm:flex md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xsm:flex-col  document_row gap-6">
                   <div className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImg} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={MoreIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={ImageIcon} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImg} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={MoreIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={ImageIcon} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                  <div className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{width:"360px",background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImg} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={MoreIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={ImageIcon} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImg} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={MoreIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`} style={{gap:"9px"}}>
                                    <Image src={ImageIcon} alt=""/>
                                    <h3>Doc -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                </div> 
            </div>
  
              <div className={`${InstructorCss.FileDocuments} mt-8`}>
               <h2>Videos</h2>
               <div className="lg:grid md:grid xsm:flex md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xsm:flex-col  document_row gap-6">
  
                   <div  className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImgVideo} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={PlayIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}>
                                    <Image src={VideoIcon} style={{width:'27px',height:"22px"}} alt=""/>
                                    <h3>Video -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div  className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImgVideo} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={PlayIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}>
                                    <Image src={VideoIcon} style={{width:'27px',height:"22px"}} alt=""/>
                                    <h3>Video -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div  className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImgVideo} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={PlayIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}>
                                    <Image src={VideoIcon} style={{width:'27px',height:"22px"}} alt=""/>
                                    <h3>Video -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
  
                   <div  className="rounded-lg p-4 document_card xsm:!w-full md:!w-full" style={{background:"#FFFFFF",boxShadow:"0px 8px 32px rgba(0, 16, 41, 0.05)", height:"385px"}}>
                        <div className='container'>
                            <div className={InstructorCss.documentCardImgImgVideo} style={{backgroundImage: `url(${FileBgImage.src})` }}>
                                <Image src={PlayIcon} alt=""/>
                            </div>
                            <div className={InstructorCss.documentCardFooterContent}>
                                 <div className="flex justify-between" style={{margin: "10px 0px"}}>
                                    <span>Created on 30 Jan 2021</span> 
                                   
                                 </div>
                                 <div className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}>
                                    <Image src={VideoIcon} style={{width:'27px',height:"22px"}} alt=""/>
                                    <h3>Video -12344444.pdg</h3>
                                 </div>
                                 <div className={InstructorCss.documentCardFooterContentbottom}>
                                     <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                 </div>
                            </div>
                        </div>
                   </div>
   
                </div> 
            </div>   
  
  
        </div>
      </>
    )
  }
  
  export default File