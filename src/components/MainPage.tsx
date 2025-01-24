import React, { useState } from 'react';
import { LogIn, LogOut, Camera, Volume2, VolumeX, Globe, Mic } from 'lucide-react';

interface MainPageProps {
  onNavigate: (flow: 'checkin' | 'checkout') => void;
}

interface ChatBubble {
  id: number;
  text: string;
  isUser: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');
  
  // 虚拟的对话数据
  const [chatBubbles] = useState<ChatBubble[]>([
    {
      id: 1,
      text: language === 'ja' ? 'チェックインをお手伝いできます。' : 'I can help you with check-in.',
      isUser: false
    },
    {
      id: 2,
      text: language === 'ja' ? 'チェックインしたいです。' : 'I would like to check in.',
      isUser: true
    },
    {
      id: 3,
      text: language === 'ja' ? '予約番号をお願いします。' : 'Please provide your reservation number.',
      isUser: false
    }
  ]);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleLanguage = () => setLanguage(language === 'ja' ? 'en' : 'ja');

  return (
    <div className="min-h-screen bg-slate-50 p-4 flex flex-col">
      {/* Tourism Button */}
      <div className="mb-6 mt-4 max-w-3xl mx-auto w-full">
        <button className="w-full p-4 bg-white text-slate-900 rounded-lg shadow-md flex flex-col items-center justify-center space-y-1 hover:bg-slate-50 transition-colors">
          <Camera className="text-amber-500" size={32} />
          <span className="text-xl font-medium">{language === 'ja' ? '観光案内' : 'Tourism'}</span>
          <span className="text-xs text-slate-600">
            {language === 'ja' 
              ? '周辺の観光スポット、レストラン、お店などをご案内します'
              : 'Discover local attractions, restaurants, and shops'}
          </span>
        </button>
      </div>

      {/* Hotel Check-in/out Buttons */}
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
        <button
          onClick={() => onNavigate('checkin')}
          className="p-4 bg-white text-slate-900 rounded-lg shadow-md flex flex-col items-center justify-center space-y-1 hover:bg-slate-50 transition-colors"
        >
          <LogIn className="text-teal-500" size={32} />
          <span className="text-xl font-medium">{language === 'ja' ? 'チェックイン' : 'Check-in'}</span>
          <span className="text-xs text-slate-600">
            {language === 'ja' 
              ? 'ホテルへのチェックインを行います'
              : 'Process your hotel check-in'}
          </span>
        </button>

        <button
          onClick={() => onNavigate('checkout')}
          className="p-4 bg-white text-slate-900 rounded-lg shadow-md flex flex-col items-center justify-center space-y-1 hover:bg-slate-50 transition-colors"
        >
          <LogOut className="text-rose-500" size={32} />
          <span className="text-xl font-medium">{language === 'ja' ? 'チェックアウト' : 'Check-out'}</span>
          <span className="text-xs text-slate-600">
            {language === 'ja' 
              ? 'ホテルからのチェックアウトを行います'
              : 'Process your hotel check-out'}
          </span>
        </button>
      </div>

      {/* Chat Bubbles */}
      <div className="fixed bottom-72 left-4 w-64 space-y-3">
        {chatBubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`flex ${bubble.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[90%] p-3 rounded-xl text-sm ${
                bubble.isUser
                  ? 'bg-sky-500 text-white rounded-br-none'
                  : 'bg-white text-slate-900 rounded-bl-none shadow-md'
              }`}
            >
              {bubble.text}
            </div>
          </div>
        ))}
      </div>

      {/* Voice Input Button */}
      <div className="fixed bottom-48 left-4 flex flex-col items-center">
        <button className="p-6 bg-white text-slate-900 rounded-full shadow-lg hover:bg-slate-50 transition-colors flex flex-col items-center">
          <Mic className="text-sky-500" size={32} />
        </button>
        <span className="mt-2 text-sm text-slate-600 text-center">
          {language === 'ja' 
            ? '音声入力'
            : 'Voice Input'}
        </span>
      </div>

      {/* Control Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col space-y-4">
        {/* Read Out Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMute}
            className="p-4 bg-white text-slate-900 rounded-xl shadow-md hover:bg-slate-50 flex items-center space-x-2"
          >
            {isMuted ? <VolumeX className="text-slate-600" size={24} /> : <Volume2 className="text-sky-500" size={24} />}
            <span className="text-sm ml-1">
              {language === 'ja' 
                ? (isMuted ? '音声OFF' : '音声ON')
                : (isMuted ? 'Voice Off' : 'Voice On')}
            </span>
          </button>
        </div>

        {/* Language Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-4 bg-white text-slate-900 rounded-xl shadow-md hover:bg-slate-50 flex items-center space-x-2"
          >
            <Globe className="text-sky-500" size={24} />
            <span className="text-sm ml-1">
              {language === 'ja' ? '英語' : '日本語'}
            </span>
          </button>
        </div>
      </div>

      {/* Digital Human Placeholder */}
      <div className="fixed bottom-0 right-0 w-80 h-96 bg-slate-100 rounded-tl-full overflow-hidden">
        {/* Here you can place your digital human image/animation */}
      </div>

      {/* Powered By Text */}
      <div className="fixed bottom-2 right-4 text-xs text-slate-400">
        Powered By GBase Support
      </div>
    </div>
  );
};

export default MainPage;