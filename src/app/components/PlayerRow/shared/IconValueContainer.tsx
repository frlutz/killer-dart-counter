import { IconValueContainerProps } from './IconValueContainer.types'

const IconValueContainer: React.FC<IconValueContainerProps> = ({
  children,
  Icon = null,
}) => (
  <div className='flex w-full justify-evenly text-3xl'>
    {Icon && Icon}
    <div className='text-center'>{children}</div>
  </div>
)

export default IconValueContainer
