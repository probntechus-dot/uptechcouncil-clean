# Image Setup Instructions

To fix broken images, you need to copy the image folder to the public directory:

**Windows PowerShell:**
```powershell
Copy-Item -Path "image" -Destination "public\image" -Recurse -Force
```

**OR manually:**
1. Copy the entire `image` folder from root
2. Paste it into the `public` folder

The structure should be:
```
public/
  image/
    Main Logo/
      mainlogo.jpeg
    Sponsor Logos/
      (all sponsor logo files)
```

After copying, restart the dev server.



