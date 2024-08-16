'use client'

import React, { useState } from 'react'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Successfully subscribed!')
        setEmail('')
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex w-full max-w-md flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 dark:ring-offset-gray-900 sm:ml-2 sm:mt-0"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-sm ${message.includes('Successfully') ? 'text-green-500' : 'text-red-500'}`}
        >
          {message}
        </p>
      )}
    </form>
  )
}

export default NewsletterForm
