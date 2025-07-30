'use client'

import Button from '@mui/joy/Button'
import Input from '@mui/joy/Input'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import { useRef, useState } from 'react'
import { createWorker } from 'tesseract.js'

const Home = () => {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f && f.type.startsWith('image/')) setFile(f)
  }

  const handleSubmit = async () => {
    if (!file) return
    setLoading(true)
    const worker = await createWorker('fas', undefined)

    const {
      data: { text }
    } = await worker.recognize(file)
    setResult(text)
    await worker.terminate()
    setLoading(false)
  }

  return (
    <Stack spacing={2} minWidth={400}>
      <input type="file" onChange={handleChange} accept="image/*" ref={inputRef} style={{ display: 'none' }} />
      <Input readOnly value={file?.name} onClick={() => inputRef?.current?.click()} />
      <Button onClick={handleSubmit} disabled={!file || loading} loading={loading}>
        Scan
      </Button>
      {result && (
        <Typography level="body-md" sx={{ whiteSpace: 'pre-wrap', direction: 'rtl' }}>
          {result}
        </Typography>
      )}
    </Stack>
  )
}

export default Home
