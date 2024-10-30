import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Inventory Management</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <button className="flex items-center gap-2 p-2">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}