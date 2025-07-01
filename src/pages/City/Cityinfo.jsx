import Aside from '../../components/Aside';
import React, { useState } from 'react';
import axios from 'axios';

const Cityinfo = () => {
    const [cityId, setCityId] = useState('');
    const [city, setCity] = useState('');

    const getCity = async () => {
        const id = Number(cityId);
        // console.log('입력된 cityId:', id);
        if (!id || isNaN(id) || id < 1 || id > 17) {
            alert('1부터 17 사이의 숫자를 입력해주세요.');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8000/city/city`, {
                params: { id: id }
            });           
            console.log('응답 데이터:', response.data);
            if (response.data && response.data.city) {
                setCity(response.data.city);
            } else {
                setCity('해당 ID에 해당하는 시/도명이 없습니다.');
            }
        } catch (error) {
            console.error('도시 정보를 가져오는 중 오류 발생:', error);
            setCity('오류가 발생했습니다.');
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
                        <p>시/도 명 가져오기 페이지 입니다.</p>
                    </div>
                    {/* <div>
                        <button onClick={connect} className='border border-gray-500 px-2 py-2'>
                            fastAPI 통신
                        </button>
                    </div> */}
                        
                    <div className='pt-8 '>
                        <p className='text-2xl'>2. 사용자가 숫자 입력 후 해당하는 시/도 명 가져오기 </p>
                        <p>fastAPI 는 엔드포인트 - 서비스 - crud 레이어 까지 통신 </p>
                        <p>답변은 city 라고 지정 </p>
                        <p>옆 nav 바에 시/도명 조회로 등록 - 경로는 알아서 </p>
                        <p>숫자 형태로 입력 되어야하며 숫자는 1~ 17 로 제한 </p>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                        <input
                            type="number"
                            value={cityId}
                            onChange={(e) => setCityId(e.target.value)}
                            placeholder="1~17 사이 숫자 입력"
                            className="border px-3 py-2 rounded"
                        />
                        <button onClick={getCity} className='border border-gray-500 px-4 py-2'>
                            시/도명 조회
                        </button>
                    </div>

                    {city && (
                        <div className="mt-4 text-lg font-semibold">
                            조회 결과: {city}
                        </div>
                    )}
                </main>
            </div>
        </div >
    );
}

export default Cityinfo;
