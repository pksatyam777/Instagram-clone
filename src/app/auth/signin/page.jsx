"use client"
import React, { useState, useEffect } from 'react';
import { getProviders, signIn, useSession } from 'next-auth/react';
import Header from '../../components/Header';

export default function Signin() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const providersResponse = await getProviders();
        setProviders(Object.values(providersResponse));
      } catch (error) {
        console.error('Error fetching providers:', error);
      }
    };

    fetchProviders();
  }, []);

  const handleSignIn = async (providerId) => {
    try {
      await signIn(providerId, { callbackUrl: '/' });
    } catch (error) {
      console.error(`Error signing in with ${providerId}:`, error);
    }
  };

  return (
    <>
      <Header />
      <div className="mt-40">
        {providers.map((provider) => (
          <div key={provider.id} className="flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"}
              alt={`${provider.name}-logo`}
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => handleSignIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
