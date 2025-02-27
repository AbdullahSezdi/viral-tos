import React from 'react'
import Header from '../components/Header'

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-purple-300">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information that you provide directly to us, information we obtain automatically when you use our Service, and information from other sources.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our platform and our users.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">3. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect the security of your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
} 