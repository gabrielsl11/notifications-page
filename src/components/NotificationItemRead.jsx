import { Dot } from 'lucide-react'

function NotificationItemRead({ ago, content, src }) {
    return (
        <>
            <div className="flex items-center gap-2 p-4 rounded-md bg-slate-50 hover:brightness-95 hover:cursor-pointer transition duration-300 ease-in-out">
                <img src={src} alt="Avatar" className="h-[45px] w-[45px]" />

                <div className="flex flex-col">
                    <span className="text-sm text-slate-500 leading-tight">
                        {content}
                    </span>

                    <span className="text-sm text-slate-500">{ago}</span>
                </div>
            </div>
        </>
    )
}

export default NotificationItemRead
