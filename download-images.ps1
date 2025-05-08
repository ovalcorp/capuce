$images = @{
    "slider1.jpg" = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop"
    "slider2.jpg" = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"
    "slider3.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
    "slider4.jpg" = "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=800&fit=crop"
    "electricidad.jpg" = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
    "ciberseguridad.jpg" = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    "alta-tension.jpg" = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop"
    "solucion1.jpg" = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
    "solucion2.jpg" = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    "solucion3.jpg" = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop"
    "portfolio1.jpg" = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop"
    "portfolio2.jpg" = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
    "portfolio3.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    "portfolio4.jpg" = "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop"
}

$outputDir = "public\images"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $outputDir $image.Key
    Write-Host "Descargando $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
} 