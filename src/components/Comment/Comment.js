import React from 'react'

import { Comment as CmtAntd, Avatar } from 'antd'

function Comment({ children }) {
    return (
        <CmtAntd
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>
            }
        >
            {children}
        </CmtAntd>
    )
}


export default Comment
