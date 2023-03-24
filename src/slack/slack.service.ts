import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SlackService {
  async modifyTable() {
    const supabase = createClient(
      'https://jozfodgkcrboijqonuoe.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvemZvZGdrY3Jib2lqcW9udW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NjcxNTgsImV4cCI6MTk5NTI0MzE1OH0.mTu021Sl3MvzopoPiiKaL4uFaGqCjZy8VoQOKPo2BaM',
    );

    const { data, error } = await supabase.from('games').insert({
      game_type: '8ball',
      inserted_at: new Date(),
      loser: 'U0TDW3PJB',
      loser_active: false,
      loser_name: 'Michael Sampson',
      winner: 'UAZJDJBC3',
      winner_active: false,
      winner_name: 'Travis Meyer',
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
