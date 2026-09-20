# EmergencyMitra — Preview Run Doc

Next.js 15 (App Router) + React 19 + Tailwind v4 + Framer Motion static site. No env files are needed.

## 1. Reproduce uncommitted artifacts

- `npm install` — restores dependencies from `package-lock.json`.
- `npm run build` — produces the `.next` production build (static prerender of `/` plus the `app/icon.svg` favicon route served at `/icon.svg`).

## 2. Run the server

- `npm start` (runs `next start`) — serves the production build.
- **Port:** defaults to 3000; if it is taken, Next picks the next free port. Read the actual URL from the first lines of the server log.
- **Detach (Windows PowerShell recipe):**

  ```powershell
  powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','start' -RedirectStandardOutput '<log>.log' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
  ```

  - Use `npm.cmd` explicitly (Start-Process does not resolve shell shims).
  - stdout and stderr must point to **different** files.
  - Note: the wrapper can hang past the tool timeout even though the detached server starts fine — check the log file and `netstat -ano | grep <port> | grep LISTEN` before re-running (re-running spawns a duplicate server).

- **Verify:** `Get-Process -Id <pid>` shows `node`; `curl http://localhost:<port>/` returns 200. Register the pid that netstat reports as LISTENING (the `npm.cmd` wrapper pid may already be gone).

## 3. Rebuild after content changes

The preview serves the **production** build, so after editing source files: `npm run build`, stop the old server, and start it again per section 2.
