import avatarAngelaGray from './images/avatar-angela-gray.webp'
import avatarMarkWeber from './images/avatar-mark-webber.webp'
import avatarJacobThompson from './images/avatar-jacob-thompson.webp'
import avatarNathanPeterson from './images/avatar-nathan-peterson.webp'
import avatarAnnaKim from './images/avatar-anna-kim.webp'
import avatarKimberleySmith from './images/avatar-kimberly-smith.webp'
import avatarRizkyHasanuddin from './images/avatar-rizky-hasanuddin.webp'
import imageChess from './images/image-chess.webp'

import NotificationItemUnread from './components/NotificationItemUnread'
import NotificationItemRead from './components/NotificationItemRead'

function App() {

  return (
    <>
      <section className="min-h-screen md:min-h-max md:rounded-md md:mt-12 md:w-[768px] flex flex-col gap-8 p-6 bg-slate-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-medium">Notifications</h1>

            <h2 className="text-sm text-slate-100 font-medium px-2 rounded-md bg-blue-900 hover:cursor-pointer">3</h2>
          </div>

          <span className="text-slate-500 hover:cursor-pointer hover:text-blue-900 transition duration-300 ease-in-out">Mark all as read</span>
        </div>

        <div className='flex flex-col gap-2'>
          <NotificationItemUnread src={avatarMarkWeber} content={<span><b className='text-slate-950'>Mark Webber</b> reacted to your recent post <b>My first tournament today!</b></span>} ago="1m ago" />

          <NotificationItemUnread src={avatarAngelaGray} content={<span><b className='text-slate-950'>Angela Gray</b> followed you</span>} ago="5m ago" />

          <NotificationItemUnread src={avatarJacobThompson} content={<span><b className='text-slate-950'>Jacob Thompson</b> has joined your <b className='text-blue-900'>Chess Club</b></span>} ago="5m ago" />

          <div className="flex flex-col gap-2 p-4 rounded-md bg-slate-50 hover:brightness-95 hover:cursor-pointer transition duration-300 ease-in-out">
            <div className='flex items-center gap-2'>
              <img src={avatarRizkyHasanuddin} alt="Avatar" className="h-[45px] w-[45px]" />
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 leading-tight">
                  <span><b className='text-slate-950'>Rizky Hasanuddin</b> sent you a private message</span>
                </span>
                <span className="text-sm text-slate-500">5 days ago</span>
              </div>
            </div>

            <span className='text-sm border p-3 rounded-md text-slate-500'>Hello, thanks for setting up the Chess Club. I have been a member for a few weeks now and I am already having lots of fun and improving my game.</span>
          </div>

          <div className="flex items-center justify-between gap-2 p-4 rounded-md bg-slate-50 hover:brightness-95 hover:cursor-pointer transition duration-300 ease-in-out">
            <div className='flex items-center gap-2'>
              <img src={avatarKimberleySmith} alt="Avatar" className="h-[45px] w-[45px]" />
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 leading-tight">
                  <span><b className='text-slate-950'>Kimberly Smith</b> commented on your picture</span>
                </span>
                <span className="text-sm text-slate-500">1 week ago</span>
              </div>
            </div>

            <img className='w-10' src={imageChess} alt="Chess" />
          </div>

          <NotificationItemRead src={avatarNathanPeterson} content={<span><b className='text-slate-950'>Nathan Peterson</b> reacted to your recent post <b>5 end-game strategies to increase your win rate</b></span>} ago="2 weeks ago" />

          <NotificationItemRead src={avatarAnnaKim} content={<span><b className='text-slate-950'>Anna Kim</b> left the group <b className='text-blue-900'>Chess Club</b></span>} ago="2 weeks ago" />
        </div>
      </section>
    </>
  )
}

export default App
