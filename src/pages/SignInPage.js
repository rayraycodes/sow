import { Link } from 'react-router-dom';
import supabase from '../components/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import '../css/SignInPage.css';

function SignInPage() {
  return (
    <div className="auth-container">
      <Link to="/" className="home-button">Back to Home</Link>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'facebook', 'twitter']}
      />
    </div>
  );
}

export default SignInPage;