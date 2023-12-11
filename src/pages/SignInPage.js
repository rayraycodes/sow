import { Link, useNavigate } from 'react-router-dom';
import supabase from '../components/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import '../css/SignInPage.css';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function SignInPage() {
  const { setAuthUser, setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN') {
          setAuthUser(session.user);
          setIsSignedIn(true); // set isSignedIn to true
          navigate('/'); // redirect to home page after sign in
        }
        if (event === 'SIGNED_OUT') {
          setAuthUser(null);
          setIsSignedIn(false); // set isSignedIn to false
        }
      }
    );
  }, [setAuthUser, setIsSignedIn, navigate]);

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