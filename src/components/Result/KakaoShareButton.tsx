import React, { useEffect } from "react";
import './KakaoShareButton.css'

const KakaoShareButton = () => {
  useEffect(() => {
    createShareButton();
  }, []);

  const createShareButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createCustomButton({
        container: "#kakao-link-btn",
        templateId: 45164,
        templateArgs: {
          name: "윤지",
          image: "https://elb.intotheforest.space/dog2-running-test.png", //ㅎ w잘된ㄷ..
        },
      });
    }
  };

  return (
  <div className='ksc'>
    <img src='https://elb.intotheforest.space/kakao.png' style={{width: '30px', height: '30px'}}/>
    <button id="kakao-link-btn">카카오로 공유하기</button>
  </div>
  )};

export default KakaoShareButton;
