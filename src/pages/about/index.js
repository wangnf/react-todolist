

import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { DetailWrapper } from './style'
export default memo(()=>{
    const navigate  = useNavigate();
    const onSkip = () => {
        navigate('/home?id=123')
    }
    const onSkipParams = () => navigate('/home/detail')
    return <div>
        <h2>about</h2>
        <DetailWrapper>
            <div className='item'>item</div>
        </DetailWrapper>
        <button onClick={onSkip}>跳转到home: query</button>
        <button onClick={onSkipParams}>跳转到home: params</button>

    </div>
})