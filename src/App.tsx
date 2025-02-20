import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { LoginPage } from './app/login/LoginPage'
import { SignupPage } from './app/signup/SignupPage'
import PlayersPage from './app/dashboard/players/PlayersPage'
import { Toaster } from "@/components/ui/toaster"
import PlayerSettings from './app/dashboard/settings/players/PlayerSettings'
import MatchesPage from './app/dashboard/matches/MatchesPage'
import { PlayerStats } from './app/dashboard/players/components/playerStats/PlayerStats'
import { RankingsPage } from './app/dashboard/rankings/RankingsPage'
import { SettingsPage } from './app/dashboard/settings/settings/SettingsPage'
// import { ThemeDebug } from "@/components/ThemeDebug"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/players" element={<PlayersPage />} />
          <Route path="/dashboard/settings/players" element={<PlayerSettings />} />
          <Route path="/dashboard/matches" element={<MatchesPage />} />
          <Route path="/dashboard/players/:playerId" element={<PlayerStats />} />
          <Route path="/dashboard/rankings" element={<RankingsPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      {/* <ThemeDebug /> */}
    </ThemeProvider>
  )
}

export default App
