import React from 'react'
import Header from '../components/Header'

export default function Terms() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-purple-300">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">1. Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">2. Use License</h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on TikTok Trend Analysis's Website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">3. Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                The materials on TikTok Trend Analysis's Website are provided on an 'as is' basis. TikTok Trend Analysis makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
} 