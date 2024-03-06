import './heading.css'

const Heading = (
    {
        title,
        className
    }:{
        className?: string
        title: string
    }
) => {
  return (
    <div className={className}>
        <h1 className='heading'>{title}</h1>
        <div className='heading__underline'>
            <div className='heading__small-underline'></div>
            <div className='heading__big-underline'></div>
        </div>
    </div>
  )
}

export default Heading