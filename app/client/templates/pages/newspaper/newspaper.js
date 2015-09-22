// Rota Jornal
NewspaperController = ApplicationController.extend();

Router.route('/jornal-meionorte', {
  name: 'newspaper',
  yieldRegions: {
    'headerNewspaper': {to: 'header'},
    'navigationNewspaper': {to: 'navigation'},
    'contentNewspaperFeatured': {to: 'content'}
  },
  fastRender: true
});

// 'newspaperFeatured': {to: 'featured'},
// 'newspaperLatest': {to: 'latest'},
// 'newspaperSection': {to: 'section'},
// 'newspaperColumns': {to: 'columns'},
// 'newspaperSpecials': {to: 'specials'},
// 'newspaperPhotos': {to: 'photos'},
// 'newspaperVideos': {to: 'videos'},