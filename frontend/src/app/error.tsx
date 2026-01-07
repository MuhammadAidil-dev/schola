'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Terjadi kesalahan</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Coba lagi</button>
    </div>
  );
}
