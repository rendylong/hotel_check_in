import React, { useState } from 'react';
import { ArrowLeft, Check, ChevronRight, ChevronLeft, CreditCard } from 'lucide-react';

interface CheckOutFlowProps {
  onBack: () => void;
}

const CheckOutFlow: React.FC<CheckOutFlowProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [roomNumber, setRoomNumber] = useState('');
  const [password, setPassword] = useState('');

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const StepIndicator = ({ currentStep }: { currentStep: number }) => (
    <div className="flex justify-center space-x-2 mb-8">
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          className={`w-3 h-3 rounded-full ${
            num === currentStep ? 'bg-sky-500' : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center">
        <button 
          onClick={onBack} 
          className="p-4 bg-white rounded-xl shadow-md hover:bg-slate-50 flex items-center text-slate-600"
        >
          <ArrowLeft size={24} />
          <span className="ml-2 text-lg">戻る</span>
        </button>
        <h2 className="text-2xl font-bold flex-1 text-center text-slate-900">チェックアウト</h2>
        <div className="w-24" /> {/* Spacer for alignment */}
      </div>

      {step < 4 && <StepIndicator currentStep={step} />}

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 text-center">部屋情報を入力してください</h3>
              <div className="max-w-lg mx-auto space-y-4">
                <input
                  type="text"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="w-full p-4 text-2xl border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-center"
                  placeholder="部屋番号"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 text-2xl border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-center"
                  placeholder="暗証番号"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={nextStep}
                  className="px-8 py-4 bg-white text-sky-500 border-2 border-sky-500 rounded-xl hover:bg-sky-50 flex items-center text-xl font-medium"
                >
                  <span>次へ</span>
                  <ChevronRight size={24} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 text-center">ご利用明細</h3>
              <div className="max-w-2xl mx-auto">
                <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-slate-600">宿泊料金</span>
                    <span className="text-xl font-medium">¥20,000</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-slate-600">レストラン利用</span>
                    <span className="text-xl font-medium">¥5,000</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-slate-600">ミニバー</span>
                    <span className="text-xl font-medium">¥1,500</span>
                  </div>
                  <div className="border-t-2 border-slate-200 pt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-slate-900">合計</span>
                    <span className="text-2xl font-bold text-slate-900">¥26,500</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-8 py-4 bg-white text-slate-500 border-2 border-slate-300 rounded-xl hover:bg-slate-50 flex items-center text-xl font-medium"
                >
                  <ChevronLeft size={24} className="mr-2" />
                  <span>戻る</span>
                </button>
                <button
                  onClick={nextStep}
                  className="px-8 py-4 bg-white text-sky-500 border-2 border-sky-500 rounded-xl hover:bg-sky-50 flex items-center text-xl font-medium"
                >
                  <span>支払いへ進む</span>
                  <ChevronRight size={24} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 text-center">お支払い</h3>
              <div className="max-w-lg mx-auto space-y-4">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center justify-center mb-4 text-sky-500">
                    <CreditCard size={32} />
                  </div>
                  <input
                    type="text"
                    className="w-full p-4 text-xl border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-center mb-4"
                    placeholder="カード番号"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="p-4 text-xl border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-center"
                      placeholder="有効期限"
                    />
                    <input
                      type="text"
                      className="p-4 text-xl border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-center"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <input
                    type="email"
                    className="w-full p-4 text-xl border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-center"
                    placeholder="領収書送信先メールアドレス"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-8 py-4 bg-white text-slate-500 border-2 border-slate-300 rounded-xl hover:bg-slate-50 flex items-center text-xl font-medium"
                >
                  <ChevronLeft size={24} className="mr-2" />
                  <span>戻る</span>
                </button>
                <button
                  onClick={nextStep}
                  className="px-8 py-4 bg-white text-emerald-500 border-2 border-emerald-500 rounded-xl hover:bg-emerald-50 flex items-center text-xl font-medium"
                >
                  <span>支払い完了</span>
                  <ChevronRight size={24} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-6 py-8">
              <div className="text-emerald-500 flex justify-center">
                <div className="bg-emerald-50 p-4 rounded-full">
                  <Check size={64} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">チェックアウト完了</h3>
                <p className="text-lg text-slate-600">ご利用ありがとうございました</p>
                <p className="text-sm text-slate-600 mt-2">領収書をメールで送信しました</p>
              </div>
              <div className="pt-4">
                <button
                  onClick={onBack}
                  className="px-8 py-4 bg-white text-slate-500 border-2 border-slate-300 rounded-xl hover:bg-slate-50 flex items-center text-xl font-medium mx-auto"
                >
                  <span>メインメニューへ</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutFlow;