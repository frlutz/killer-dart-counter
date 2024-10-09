import { IconValueContainerProps } from './IconValueContainer.types'

const IconValueContainer: React.FC<IconValueContainerProps> = ({
  children,
  Icon = null,
}) => (
  <div className='flex w-full justify-center text-3xl'>
    {Icon && <div className='px-8'>{Icon}</div>}
    <div className='text-center'>{children}</div>
  </div>
)

export default IconValueContainer
