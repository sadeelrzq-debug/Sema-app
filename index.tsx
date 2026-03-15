import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createClient } from '@supabase/supabase-js';

// إعدادات الربط السحابي (جاهزة بمفاتيحك يا بطلة)
const supabaseUrl = 'https://arjphjqptwnqwlpgfixw.supabase.co';
const supabaseKey = 'sb_publishable_fUq5zd9PzGiwO-A9Rk98_Q_XSwmTWQE';
export const supabase = createClient(supabaseUrl, supabaseKey);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
