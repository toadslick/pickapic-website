### Known bugs and fixes

Bugs will be listed here as they are reported and confirmed. Fixing bugs is our highest priority and fixes will be released as soon as possible.
Please [contact us](#TODO) contact us if you've found a bug that isn't listed here.

### Internationalization

We've worked with many families that are not native English speakers and we want to make Pick-a-Pic accessible to them as soon as we can. Additional language support will be added as time and budget allow.

### Upcoming releases

#### **v1.1** Performance and stability improvements

- **Concurrent picture creation**: Improve the speed of bulk picture creation by splitting it into concurrent background tasks.
- **Handle downloading document**: When a document is opened via iCloud before it is fully downloaded, display a progress meter that indicates download progress.
- **Handle empty document state**: Investigate whether the app can be put into a state where no document is opened. If so, handle it gracefully.
- **Handle conflict document state**: If two users have saved conflicting versions of a Pick-a-Pic document, display an interface for conflict resolution.
- **Improve state restoration**: Define more [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) objects so that app state can be restored in greater detail.
- **Reduce cache memory footprint**: Move cached data from RAM to disk by using [URLCache](https://developer.apple.com/documentation/foundation/urlcache) instead of [NSCache](https://developer.apple.com/documentation/foundation/nscache) when possible.

#### **v1.2** Features for power users

Our goal is to add features that increase the utility of Pick-a-Pic for professionals. We want Pick-a-Pic to be an app that BCBAs and therapists can design treatment programs around.

- **Bulk actions**: Enable multiple pictures to be tagged or deleted at one time.
- **Bulk import**: Allow multiple photos or files to be imported.
- **Tag on import**: Allow tags to be selected that will be applied to all pictures as they are imported.
- **Duplicate book**: Allow books to be copied, including to other Pick-a-Pic files.
- **Duplicate page or book**: Allow pages to be copied, including to other books.
- **Import export book**: Allow books to be exported and then imported into other Pick-a-Pic documents.
- **Import / export photo library**: Allow the photo library to be exported and then imported into other Pick-a-Pic documents.

#### **v1.3** iPadOS integrations and conventions

We want to continue adding the small details that make an app feel truly iPad-like.

- **Live document thumbnail**: Implement [QLThumbnailProvider](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailprovider) to make Pick-a-Pic document file thumbnails display the cover of one of their books.
- **Keyboard shortcuts**: Create keyboard shortcuts for common app actions, such as importing, renaming, deleting, or even scrolling through pages.
- **Add app to share sheets**: Implement [SLComposeServiceViewController](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller) to allow images to be imported as pictures through the system share sheet.
- **Rename document while in app**: Allow the currently opened document to be renamed without exiting to the file picker.
