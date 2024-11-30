import { IconValueContainerProps } from './IconValueContainer.types'

const IconValueContainer: React.FC<IconValueContainerProps> = ({
  children,
  Icon = null,
}) => (
  <div className='flex w-full justify-center text-3xl'>
    {Icon && Icon}
    <div className={`text-center ${Icon ? 'pl-3' : null}`}>{children}</div>
  </div>
)

export default IconValueContainer
