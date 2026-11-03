// Crop a PNG to an exact pixel size from its top-left corner, without resampling.
// usage: osascript -l JavaScript crop-png.js <in.png> <out.png> <width> <height>
ObjC.import('Foundation'); ObjC.import('CoreGraphics'); ObjC.import('ImageIO');
function run(argv) {
  if (argv.length < 4) return 'usage: crop-png.js <in.png> <out.png> <width> <height>';
  const [inPath, outPath] = argv, w = parseInt(argv[2]), h = parseInt(argv[3]);
  const src = $.CGImageSourceCreateWithURL($.NSURL.fileURLWithPath(inPath), null);
  const img = $.CGImageSourceCreateImageAtIndex(src, 0, null);
  if (!img) return 'error: cannot read ' + inPath;
  const iw = $.CGImageGetWidth(img), ih = $.CGImageGetHeight(img);
  if (w > iw || h > ih) return 'error: image is ' + iw + 'x' + ih + ', smaller than ' + w + 'x' + h;
  const cropped = $.CGImageCreateWithImageInRect(img, $.CGRectMake(0, 0, w, h));
  const dest = $.CGImageDestinationCreateWithURL($.NSURL.fileURLWithPath(outPath), $('public.png'), 1, null);
  $.CGImageDestinationAddImage(dest, cropped, null);
  if (!$.CGImageDestinationFinalize(dest)) return 'error: cannot write ' + outPath;
  return 'ok: ' + outPath + ' ' + w + 'x' + h + ' (from ' + iw + 'x' + ih + ')';
}
