import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
function Preview() {
    const htmlCode = useSelector((state) => state.code.htmlCode);
    const cssCode = useSelector((state) => state.code.cssCode);
    const jsCode = useSelector((state) => state.code.jsCode);
    const navigate=useNavigate();
    const handleOutput = () => {
        var output = document.getElementById('codebee-output');
        output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
        output.contentWindow.eval(jsCode);
    }
    useEffect(() => {
        handleOutput();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <button style={{ position: "fixed", top: "10px", right: "10px",zIndex:"1" }} onClick={()=>{navigate('/')}}>Close</button>
            <Row style={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
                <Col span={24}>
                    <iframe title='output' id="codebee-output" height="100%" width="100%" style={{ backgroundColor: "white" }}>
                    </iframe>
                </Col>
            </Row>
        </>
    )
}
export default Preview;