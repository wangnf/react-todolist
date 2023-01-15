import { memo } from 'react'
import { useParams } from 'react-router-dom'

export default memo(()=>{

    const params = useParams();
    
    return <div>
        <h2>home-detail</h2>
        <div>
            params参数：{params}
        </div>
    </div>
})
