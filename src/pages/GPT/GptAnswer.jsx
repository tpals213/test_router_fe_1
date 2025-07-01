import Aside from '../../components/Aside';
import React, { useState } from 'react';
import axios from 'axios';

const GptAnswer = () => {

    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        try {
        setIsLoading(true);
        const res = await axios.post('http://localhost:8000/gpt', {
            prompt: prompt,
        });
            setAnswer(res.data.response);
        } catch (err) {
            setAnswer('GPT 응답 오류 발생');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="flex">
                <div className="mb:hidden">
                    <Aside />
                </div>
                <main>
                    <div>
                        <p>지피티 테스트 페이지 입니다.</p>
                    </div>
                    <div className='pt-8 '>
                        <p className='text-2xl'>1. 사용자가 질문 입력 후 답변 받기 라는 버튼 클릭 후 해당 답변 GPT 로 받아보기 </p>
                        <p>fastAPI 는 엔드포인트 - 서비스 레이어 까지 통신 </p>
                        <p>답변은 answer 라고 지정 </p>
                        <p>옆 nav 바에 gpt 대답으로 등록 - 경로는 알아서 </p>
                        <p>심화 : isLoading 으로 로딩 처리 해보기 </p>
                        
                        <hr className='my-4' />
                        <p>GPT 통신 방법</p>
                        <input className="border p-2 w-full mb-4" value={prompt} onChange={(e) => setPrompt(e.target.value)}
                            placeholder="질문을 입력하세요"/>
                            
                        <button onClick={handleSubmit} disabled={isLoading}
                            className="bg-purple-600 text-white px-4 py-2 rounded">
                            {isLoading ? '불러오는 중...' : '답변 받기'}
                        </button>
                        {answer && (
                            <div className="mt-4 p-4 border rounded bg-gray-100">
                                <strong>GPT 응답:</strong> {answer}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div >
    );
}

export default GptAnswer;
