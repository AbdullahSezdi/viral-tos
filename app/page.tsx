'use client'
import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
              TikTok Trend Analizi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sosyal medya trendlerini analiz ederek geleceğin içerik stratejilerini belirliyoruz
            </p>
          </div>

          {/* Ana Başlıklar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Teknik Analiz</h3>
              <p className="text-gray-300 leading-relaxed">
                Detaylı teknik raporlar ve veri analizleri ile içerik stratejileri geliştiriyoruz. Her trend için kapsamlı inceleme.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Yol Haritası</h3>
              <p className="text-gray-300 leading-relaxed">
                Adım adım sosyal medya başarısı için stratejik planlama yapıyoruz. Net ve ölçülebilir hedefler belirliyoruz.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Genel Rapor</h3>
              <p className="text-gray-300 leading-relaxed">
                Kapsamlı içerik ve trend analizi sonuçlarını detaylı raporlar halinde sunuyoruz.
              </p>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-3 animate-pulse">500+</div>
              <div className="text-gray-300">Analiz Edilen Video</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-3 animate-pulse">50M+</div>
              <div className="text-gray-300">Toplam Görüntülenme</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-3 animate-pulse">100+</div>
              <div className="text-gray-300">Trend Başlık</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-3 animate-pulse">25+</div>
              <div className="text-gray-300">İçerik Kategorisi</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 