import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const apiKey = process.env.POKEMON_API_KEY;

  // Ensure the API key is present
  if (!apiKey) {
    return NextResponse.json({ message: 'API key is missing. Please check your .env file.' }, { status: 400 });
  }

  // Make a request to the Pokémon TCG API using the API key in the headers
  const response = await fetch('https://api.pokemontcg.io/v2/cards/swsh4-25', {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey, // Add the API key in the header
    },
  });

  // Check for response status
  if (!response.ok) {
    return NextResponse.json({ message: 'Failed to fetch data from Pokémon TCG API.' }, { status: 500 });
  }

  // Parse and return the response data from the Pokémon TCG API
  const data = await response.json();
  return NextResponse.json(data);
}