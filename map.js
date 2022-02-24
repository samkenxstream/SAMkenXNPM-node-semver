module.exports = testFile => testFile.includes('bin/')
  ? testFile.replace(/test\//, 'bin/')
  : testFile.replace(/test\//, 'lib/')
