import './MainHeader.css';

function MainHeader (){
    return (
        <header className="main-header">
            <div className="container">
                {/* Логотип */}
                <div className="logo">
                    <a href="/">TravelApp</a>
                </div>

                {/* Навигация */}
                <nav className="main-nav">
                    <ul>
                        <li><a href="/flights">Flights</a></li>
                        <li><a href="/hotels">Hotels</a></li>
                        <li><a href="/cars">Car Rentals</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </nav>

                {/* Профиль и логин */}
                <div className="user-actions">
                    <a href="/login" className="login-btn">Login</a>
                    <a href="/profile" className="profile-icon">
                        <img src="profile-icon.png" alt="Profile" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default MainHeader