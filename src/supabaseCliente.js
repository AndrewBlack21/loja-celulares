// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrpvbnbiwdvbirfakogp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycHZibmJpd2R2YmlyZmFrb2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1NTM1ODUsImV4cCI6MjA3MzEyOTU4NX0.QO3kQd52DsDIpJj1wg5-scowOZr-TH_DwiAu8lgqKyg"; // encontrada no Supabase > Project Settings > API
export const supabase = createClient(supabaseUrl, supabaseKey);
