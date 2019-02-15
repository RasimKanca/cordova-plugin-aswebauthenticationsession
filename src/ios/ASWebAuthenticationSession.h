#import <Cordova/CDVPlugin.h>

@interface ASWebAuthenticationSession : CDVPlugin {
}

// The hooks for our plugin commands
- (void)start:(CDVInvokedUrlCommand *)command;

@end
