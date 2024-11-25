import { Dot } from 'lucide-react'

function NotificationItemUnread({ ago, content, src }) {
    return (
        <>
            <div className="flex items-center gap-2 p-4 rounded-md bg-slate-100 hover:brightness-95 hover:cursor-pointer transition duration-300 ease-in-out">
                <img src={src} alt="Avatar" className="h-[45px] w-[45px]" />

                <div className="flex flex-col gap-0">
                    <span className="text-sm text-slate-500 leading-none">
                        {content}
                        <Dot size={30} className='inline-block text-red-600' />
                    </span>

                    <span className="text-sm leading-none text-slate-500">{ago}</span>
                </div>
            </div>
        </>
    )
}

export default NotificationItemUnread
