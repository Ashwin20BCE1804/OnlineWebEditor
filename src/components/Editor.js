import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import codebeelogo from '../assets/codebee-logo.png';
import {IoLogoHtml5,IoLogoCss3} from 'react-icons/io';
import {IoLogoJavascript} from 'react-icons/io5';
import {updateHtmlCode,updateCssCode,updateJsCode} from '../Slices/CodeSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Editor() {
    const htmlCode=useSelector((state)=>state.code.htmlCode);
    const cssCode=useSelector((state)=>state.code.cssCode);
    const jsCode=useSelector((state)=>state.code.jsCode);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleOutput=()=>{
        var output=document.getElementById('codebee-output');
        output.contentDocument.body.innerHTML=htmlCode+"<style>"+cssCode+"</style>";
        output.contentWindow.eval(jsCode);
    }
    useEffect(()=>{
        handleOutput();
        // eslint-disable-next-line
    },[])
    return (
        <>
            <Row>
                <Col span={24} className='d-flex justify-content-center align-items-center pt-4 pb-3'>
                    <img src={codebeelogo} alt="codebee-logo" style={{ width: "150px" }} />
                </Col>
            </Row>
            <Row>
                <Col xs={{span:"22",offset:1}} sm={{span:"22",offset:1}} md={{span:"22",offset:1}} lg={{span:7,offset:.5}}>
                    <div className='code-container'>   
                        <IoLogoHtml5 style={{color:"red",fontSize:"25px"}}/><span>HTML</span>
                        <textarea rows={12} value={htmlCode} onChange={(e)=>{
                            dispatch(updateHtmlCode({data:e.target.value}))
                        }}></textarea>
                    </div>
                </Col>
                <Col xs={{span:"22",offset:1}} sm={{span:"22",offset:1}} md={{span:"22",offset:1}} lg={{span:6,offset:1}}>
                    <div className='code-container'>   
                        <IoLogoCss3 style={{color:"skyblue",fontSize:"25px"}}/><span>CSS</span>
                        <textarea rows={12} value={cssCode} onChange={(e)=>{
                            dispatch(updateCssCode({data:e.target.value}))
                        }}></textarea>
                    </div>
                </Col>
                <Col xs={{span:"22",offset:1}} sm={{span:"22",offset:1}} md={{span:"22",offset:1}} lg={{span:7,offset:1}}>
                    <div className='code-container'>   
                        <IoLogoJavascript style={{color:"yellow",fontSize:"25px"}}/><span>Javascript</span>
                        <textarea rows={12} value={jsCode} onChange={(e)=>{
                            dispatch(updateJsCode({data:e.target.value}))
                        }}></textarea>
                    </div>
                </Col>
                <Col span={24} className="d-flex justify-content-center align-items-center w-100 mb-4">
                    <button onClick={handleOutput}>Run Code</button>
                    <button onClick={()=>{
                        navigate('/preview')
                    }}>Output Window</button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <iframe title='output' id="codebee-output" height="600px" width="100%" style={{backgroundColor:"white"}}>
                    </iframe>
                </Col>
            </Row>
        </>
    )
}
export default Editor;