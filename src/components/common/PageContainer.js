import React from 'react'

const PageContainer = (props) => {

  return(
    <div className="page-container is-paddingless is-marginless">
      {props.children}
    </div>
  )

}

export default PageContainer
